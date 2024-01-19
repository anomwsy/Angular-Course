import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  constructor(private _service : PostService) { 
  }
  posts : any[] = [];
  title : string = '';
  isEditing : boolean = false;
  EditingData : any = null;
  ngOnInit(): void {
    this.getposts();
  }
  getposts() {
    this._service.getAllData()
    .subscribe({
      next : (data : any) => {
        this.posts = data;
        console.log(data);
      },
      error : (err) => {
        console.log(err);
      }
    });
  }

  createElement(input : string){
    if (this.isEditing){
        let updatedData = {
          ...this.EditingData,
          title : input
        }
        this._service.patch(this.EditingData.id,updatedData, {
          Headers : {
            'Content-Type' : 'application/json'
          }
        }).subscribe({
          next : (data : any) => {
            this.isEditing = false
            this.title = '';
            this.EditingData = null;
            let index = this.posts.findIndex((post) => post.id == data.id);
            this.posts[index].title = data.title;
            console.log(data);
          },
          error : (err) => {
            console.log(err);
          }
        })
        return;
    }

    let post = {
      title : input,
      body : "ini data post",
      userId : 1
    }
   this._service.create(post)
    .subscribe({
      next : (data : any) => {
        let addPost = {
          ...post,
          id : data["id"]
        }
        this.posts.splice(0, 0, addPost);
        console.log(data);
        this.title = '';
      },
      error : (err) => {
        console.log(err);
      }
    });
  }
  deleteClick(post: any){
    this._service.delete(post.id)
    .subscribe({
      next: (response: any) => {
        console.log(response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      },
      error: (error: any) => {
        console.log("ini error dari delete click");
        console.log(error);

      }
    })
  }
  cancelEditing(){
    this.isEditing = false;
    this.title = '';
  }
  onEdit(post : any){
    this.EditingData = post;
    this.title = post.title;
    this.isEditing = true;
  }
}
