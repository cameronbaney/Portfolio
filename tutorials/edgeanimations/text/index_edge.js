/**
 * Adobe Helium: symbol definitions
 */
window.symbols = {
"stage": {
   version: "0.1",
   baseState: "Base State",
   initialState: "Base State",
   parameters: {

   },
   content: {
      dom: [
        {
            id:'Text1',
            type:'text',
            rect:[80,137,0,0],
            text:"Grow",
            font:["Arial Black, Gadget, sans-serif",[24,""],"rgba(0,0,0,1)","normal","none",""],
        },
        {
            id:'Text2',
            type:'text',
            rect:[214,318,0,0],
            text:"Shrink",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",24,"rgba(0,0,0,1)","normal","none","normal"],
        },
      ],
      symbolInstances: [
      ],
   },
   states: {
      "Base State": {
         "#stage": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "#Text2": [
            ["transform", "translateY", '-59px'],
            ["transform", "translateX", '-20px'],
            ["style", "font-size", '74.9px']
         ],
         "#Text1": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-size", '24px']
         ]
      }
   },
   actions: {

   },
   bindings: [

   ],
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         timeline: [
            { id: "eid3", tween: [ "transform", "#Text2", "translateY", '-59px', { valueTemplate: undefined, fromValue: '-59px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid6", tween: [ "style", "#Text1", "font-size", '57.1px', { valueTemplate: undefined, fromValue: '24px'}], position: 0, duration: 3000, easing: "linear" },
            { id: "eid5", tween: [ "color", "#Text1", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid7", tween: [ "style", "#Text2", "font-size", '20px', { valueTemplate: undefined, fromValue: '74.9px'}], position: 0, duration: 3000, easing: "linear" },
            { id: "eid2", tween: [ "transform", "#Text2", "translateX", '-20px', { valueTemplate: undefined, fromValue: '-20px'}], position: 0, duration: 0, easing: "linear" }]
      }
   },
}};

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     $.Edge.initialize(symbols);
});
/**
 * Adobe Edge Timeline Launch
 */
$(window).load(function() {
    $.Edge.play();
});
