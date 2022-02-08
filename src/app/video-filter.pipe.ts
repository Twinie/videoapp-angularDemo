
import { Pipe, PipeTransform } from "@angular/core";
import { IVideo } from "./Ivideo";

@Pipe({
    name: 'videoFilter'
})

export class VideoFilterPipe implements PipeTransform
{
    transform(value: IVideo[], filterBy:string): IVideo[] {
filterBy != filterBy ? filterBy.toLocaleLowerCase():null;
return filterBy ? value.filter((video:IVideo)=>
video.Title.toLocaleLowerCase().indexOf(filterBy) !=-1):value;
    }
}