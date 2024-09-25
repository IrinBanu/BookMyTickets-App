import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-movie',
  standalone: true,
  imports: [],
  templateUrl: './view-movie.component.html',
  styles: ``
})
export class ViewMovieComponent {

movieName!:string;

movie:any;

constructor(private route: ActivatedRoute){
  this.movieName=this.route.snapshot.params['id'];

  this.movie=this.movies.find(obj=>obj.title==this.movieName);
}

movies=[
  {
  title:"Transformers One",
  imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAzLjlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00399519-llmvhqmrex-portrait.jpg",
  description:"Action/Adventure/Animation/Family/Sci-Fi"
  },
  
  {
    title:"Nandhan",
    imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAxLjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410955-xrkaktrqyj-portrait.jpg",
    description:"Drama/Family"
    },
  
    {
      title:"Meiyazhagan",
      imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTBLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00405427-jtaxncpkny-portrait.jpg",
      description:"Comedy/Drama"
      },
    
      {
        title:"The Greatest of All Time(The GOAT)",
        imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICAyNDkuNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00401439-xdtxcmtyux-portrait.jpg",
        description:"Action/Drama/Thriller"
        },
      {
       title:"Tumbbad",
       imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA5Ny42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00079092-wzzsfeaaxh-portrait.jpg",
       description:"Fantasy/Horror/Period"
      },
  
      {
        title:"Kadaisi Ulaga Por",
        imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00412085-pbuazgngzu-portrait.jpg",
        description:"Action/Sci-Fi/Thriller/War"
       },
    
  
  ]
  }
  


