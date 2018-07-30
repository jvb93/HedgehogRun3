import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router ,NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent {

  currentRoute: string;
  title: string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    ngOnInit() {
      this.route.params.pipe(
        map(params => params['id'])
        ).subscribe((id) => {
          this.currentRoute = id;
        });
  }

  getTitle(state, parent) {
    
//    console.log(state.snapshot.url);
    if(state && state.snapshot){
      return state.snapshot.url
    }
    return "duh"
  }

  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private router: Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
      
        this.title = this.getTitle(router.routerState, router.routerState.root);
       
      }
    });
  }
  
  }
