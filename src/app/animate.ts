import{trigger,style,transition,animate,keyframes,query,stagger, state} from '@angular/animations';


export const fade= trigger('fade',[
    state('fadeIn',style({transform:'scale(1)'})),
    state('fadeOut',style({transform:'scale(1.2)'})),
  
    transition('fadeIn <=> fadeOut',animate('300ms linear')),
  ]);
  export const fade1= trigger('fade1',[
    state('fadeIn',style({transform:'scale(1)'})),
    state('fadeOut',style({transform:'scale(1.2)'})),
  
    transition('fadeIn <=> fadeOut',animate('300ms linear')),
  ]);
  export const fade2= trigger('fade2',[
    state('fadeIn',style({transform:'scale(1)'})),
    state('fadeOut',style({transform:'scale(1.2)'})),
  
    transition('fadeIn <=> fadeOut',animate('300ms linear')),
  ]);

  export const listAnimation=trigger('listAnimation',[
    transition('* => *',[
      query(':enter',style({opacity:0}),{optional:true}),
  
      query(':enter',stagger('300ms',[
        animate('1s ease-in',keyframes([
          style({opacity:0,transform:'translateY(-75px)',offset:0}),
          style({opacity:.5,transform:'translateY(35px)',offset:0.3}),
          style({opacity:1,transform:'translateY(0)',offset:1}),
  
        ]))
      ]),{optional:true}),
      query(':leave',stagger('300ms',[
        animate('1s ease-in',keyframes([
          style({opacity:1,transform:'translateY(0)',offset:0}),
          style({opacity:.5,transform:'translateY(35px)',offset:0.3}),
          style({opacity:0,transform:'translateY(-75px)',offset:1}),
  
        ]))
      ]),{optional:true}),
    ])
  ]);

  export const explainerAnim=trigger('explainerAnim',[
    transition('* => *',[
      query('.col',style({opacity:0,transform:'translateX(-40px)'})),
      query('.col',stagger('500ms',[
        animate('800ms 0.3s ease-out',style({opacity:1, transform:'translateX(0)'}))
      ]))
    ])
  ]);

  export const myAwesomeAnimation=trigger('myAwesomeAnimation',[
    state('fadeIn',style({transform:'scale(1)'})),
    state('fadeOut',style({transform:'scale(1.2)'})),
    transition('fadeIn <=> fadeOut',animate('300ms linear'))
    //transition('small <=> large',animate('300ms ease-in',keyframes([
  // style({opacity:0,transform:'translateY(-75%)',offset:0}),
  // style({opacity:1,transform:'translateY(35px)',offset:.5}),
  // style({opacity:1,transform:'translateY(0)',offset:1}),
    //]))),
  ]);