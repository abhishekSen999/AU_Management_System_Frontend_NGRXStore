import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { Observable, fromEvent, Observer, of, interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // let button = document.querySelector('button');
    // const clicks$ = fromEvent(button, 'click');
    // // clicks$.subscribe((value) => console.log(value));
    // const observer: Observer<any> = {
    //   next: (value) => console.log(value),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('completed'),
    // };
    // const buttonClick$: Observable<any> = Observable.create(
    //   (obs: Observer<any>) => {
    //     button.onclick = (event) => obs.next(event);
    //   }
    // );
    // const subscription = buttonClick$
    //   .pipe(
    //     switchMap<any, Observable<any>>((click) => interval(1000))
    //   )
    //   .subscribe(observer);
    // setTimeout(() => subscription.unsubscribe(), 5000);
    // const switched$ = of<number>(1, 2, 3).pipe(
    //   switchMap((x: number) => of(-x * 2)) //returning obsera
    // );
    // switched$.subscribe(
    //   (value: number) => console.log(`hello- ${value}`),
    //   (error) => console.log(error)
    // );
    // console.log(
    //   '---------------------------------------------------------------------------'
    // );
    // const switched1$ = of<number>(1, 2, 3).pipe(map((value) => value * 2));
    // switched1$.subscribe(
    //   (value) => console.log(`bye- ${value}`),
    //   (error) => console.log(`error ${error}`)
    // );
  }
}
