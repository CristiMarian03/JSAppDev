import { NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [NgIf, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
descriere: string = 'Scurta descriere pentru Home'
myimg:string ='https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2018/07/angular-logo-1.png?fit=480%2C240&ssl=1';
showImage:boolean = true;
salut(){
  this.descriere ='S-a schimbat descrierea';
}
showImg(){
this.showImage = !this.showImage;
}
}
