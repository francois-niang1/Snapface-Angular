import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
    title!: string; 
    description!: string; 
    createdDate!: Date;
    snaps!: number; 
    imageUrl! : string;
    
    ngOnInit(): void {
        this.title = 'MaineCoon';
        this.description = 'La plus grande race de chat au monde';
        this.createdDate = new Date();
        this.snaps = 34;
        this.imageUrl = "https://www.au-chat-heureux.com/_i/181484/6120/361/21/maine-coon.jpeg"
    }
}
