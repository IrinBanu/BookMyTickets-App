import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService  {

  constructor() { }
  
    private movies=[
      {id:48,
        title:"Vettaiyan",
        imgUrl:"assets/images/vettaiyan.jpg",
        description:"Action/Drama",
        language:"Tamil, Hindi",
        price:"150"
        },

      {id:49,
        title:"Black",
        imgUrl:"assets/images/black.jpg",
        description:"Horror/ Thriller",
        language:"Tamil",
        price:"120"
        },

      {id:50,
      title:"Hitler",
      imgUrl:"/assets/images/hitler.jpg",
      description:"Action/Drama/Thriller",
      language:"Tamil, Telugu",
      price:"150"
      },
      
      {id:51,
        title:"Nandhan",
        imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAxLjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410955-xrkaktrqyj-portrait.jpg",
        description:"Drama/Family",
        language:"Tamil",
        price:"120"
        },
      
        {id:52,
          title:"Meiyazhagan",
          imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTBLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00405427-jtaxncpkny-portrait.jpg",
          description:"Comedy/Drama",
          language:"Tamil",
          price:"120"
          },
        
          {id:53,
            title:"The Greatest of All Time(The GOAT)",
            imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICAyNDkuNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00401439-xdtxcmtyux-portrait.jpg",
            description:"Action/Drama/Thriller",
            language:"Tamil/Telugu/Kannada",
            price:"175"
            },
          {id:54,
           title:"Tumbbad",
           imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA5Ny42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00079092-wzzsfeaaxh-portrait.jpg",
           description:"Fantasy/Horror/Period",
           language:"English/Tamil/Hindi",
           price:"220"
          },
      
          {id:55,
            title:"Kadaisi Ulaga Por",
            imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00412085-pbuazgngzu-portrait.jpg",
            description:"Action/Sci-Fi/Thriller/War",
            language:"Tamil",
            price:"120"
           },
        
      
      ];
    
  
getAllMovies(){
  return this.movies;
};

getMovieDetails(title:string){
  const selectedMovie=this.movies.find(obj=>obj.title==title);
  return selectedMovie;
};

getMovieById(id: number) {
  const movie = this.movies.find(obj => obj.id == id);
  return movie;
}

}
