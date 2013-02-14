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
            id:'Rectangle3',
            type:'rect',
            rect:[-11,407,990,212],
            fill:['rgba(192,192,192,1)'],
            stroke:[0,"rgb(0, 0, 0)","none"],
        },
        {
            id:'Rectangle4',
            type:'rect',
            rect:[-9,-4,1010,437],
            fill:['rgba(55,165,253,1)'],
            stroke:[0,"rgb(0, 0, 0)","none"],
        },
        {
            id:'RoundRect7',
            type:'rect',
            rect:[76,32,156,156],
            borderRadius:[400,400,400,400],
            fill:['rgba(1,16,27,1)'],
            stroke:[0,"rgb(0, 0, 0)","none"],
        },
        {
            id:'RoundRect8',
            type:'rect',
            rect:[112,6,203,203],
            borderRadius:[400,400,400,400],
            fill:['rgba(255,255,255,1)'],
            stroke:[0,"rgb(0, 0, 0)","none"],
        },
        {
            id:'RoundRect1',
            type:'rect',
            rect:[539,88,110,118],
            borderRadius:[10,10,10,10],
            fill:['rgba(15,156,38,1)'],
            stroke:[0,"rgb(0, 0, 0)","none"],
        },
      ],
      symbolInstances: [
      ],
   },
   states: {
      "Base State": {
         "#Rectangle4": [
            ["color", "background-color", 'rgba(0,9,16,1.00)'],
            ["transform", "translateX", '10px'],
            ["style", "height", '418px'],
            ["transform", "translateY", '4px'],
            ["style", "width", '958px']
         ],
         "#RoundRect1": [
            ["color", "background-color", 'rgba(255,236,0,1.00)'],
            ["style", "border-top-left-radius", [400,400],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "translateX", '-754.64496px'],
            ["style", "border-bottom-right-radius", [400,400],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "border-top-right-radius", [400,400],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "width", '206.64495114007px'],
            ["style", "border-bottom-left-radius", [400,400],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "height", '207.67367485934px'],
            ["transform", "translateY", '54.50814px']
         ],
         "#RoundRect8": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["transform", "translateY", '168px'],
            ["transform", "translateX", '-316px']
         ],
         "#stage": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '960px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "#Rectangle3": [
            ["color", "background-color", 'rgba(15,156,38,1.00)'],
            ["transform", "translateX", '12px'],
            ["style", "height", '186px'],
            ["transform", "translateY", '6px'],
            ["style", "width", '958px']
         ],
         "#RoundRect7": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateY", '145px'],
            ["transform", "translateX", '-312px']
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
         duration: 9680,
         timeline: [
            { id: "eid135", tween: [ "transform", "#RoundRect1", "translateY", '-76.49186px', { valueTemplate: undefined, fromValue: '54.50814px'}], position: 0, duration: 3000, easing: "linear" },
            { id: "eid136", tween: [ "transform", "#RoundRect1", "translateY", '-76.30853px', { valueTemplate: undefined, fromValue: '-76.49186px'}], position: 3000, duration: 50, easing: "linear" },
            { id: "eid138", tween: [ "transform", "#RoundRect1", "translateY", '54.50814px', { valueTemplate: undefined, fromValue: '-76.30853px'}], position: 3050, duration: 2950, easing: "linear" },
            { id: "eid37", tween: [ "transform", "#Rectangle3", "translateY", '6px', { valueTemplate: undefined, fromValue: '6px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid28", tween: [ "transform", "#Rectangle4", "translateY", '4px', { valueTemplate: undefined, fromValue: '4px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid142", tween: [ "transform", "#Rectangle4", "translateY", '4px', { valueTemplate: undefined, fromValue: '4px'}], position: 3000, duration: 0, easing: "linear" },
            { id: "eid29", tween: [ "style", "#Rectangle4", "height", '418px', { valueTemplate: undefined, fromValue: '418px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid1", tween: [ "style", "#stage", "width", '960px', { valueTemplate: undefined, fromValue: '960px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid133", tween: [ "transform", "#RoundRect1", "translateX", '-195.64496px', { valueTemplate: undefined, fromValue: '-754.64496px'}], position: 0, duration: 3000, easing: "linear" },
            { id: "eid134", tween: [ "transform", "#RoundRect1", "translateX", '-172.9283px', { valueTemplate: undefined, fromValue: '-195.64496px'}], position: 3000, duration: 50, easing: "linear" },
            { id: "eid137", tween: [ "transform", "#RoundRect1", "translateX", '447.35504px', { valueTemplate: undefined, fromValue: '-172.9283px'}], position: 3050, duration: 2950, easing: "linear" },
            { id: "eid85", tween: [ "style", "#RoundRect1", "border-bottom-left-radius", [400,400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [400,400]}], position: 0, duration: 0, easing: "linear" },
            { id: "eid86", tween: [ "style", "#RoundRect1", "border-top-left-radius", [400,400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [400,400]}], position: 0, duration: 0, easing: "linear" },
            { id: "eid27", tween: [ "transform", "#Rectangle4", "translateX", '10px', { valueTemplate: undefined, fromValue: '10px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid141", tween: [ "transform", "#Rectangle4", "translateX", '10px', { valueTemplate: undefined, fromValue: '10px'}], position: 3000, duration: 0, easing: "linear" },
            { id: "eid207", tween: [ "transform", "#RoundRect8", "translateX", '29px', { valueTemplate: undefined, fromValue: '-316px'}], position: 6000, duration: 1635, easing: "linear" },
            { id: "eid202", tween: [ "transform", "#RoundRect8", "translateX", '591px', { valueTemplate: undefined, fromValue: '29px'}], position: 7635, duration: 2045, easing: "linear" },
            { id: "eid72", tween: [ "style", "#RoundRect1", "width", '206.64495114007px', { valueTemplate: undefined, fromValue: '206.64495114007px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid189", tween: [ "color", "#RoundRect8", "background-color", 'rgba(1,16,27,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 545, duration: 5455, easing: "linear" },
            { id: "eid146", tween: [ "color", "#Rectangle4", "background-color", 'rgba(55,165,253,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,9,16,1.00)'}], position: 0, duration: 1500, easing: "linear" },
            { id: "eid152", tween: [ "color", "#Rectangle4", "background-color", 'rgba(55,165,253,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(55,165,253,1.00)'}], position: 1500, duration: 1500, easing: "linear" },
            { id: "eid149", tween: [ "color", "#Rectangle4", "background-color", 'rgba(55,165,253,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(55,165,253,1)'}], position: 3000, duration: 1500, easing: "linear" },
            { id: "eid153", tween: [ "color", "#Rectangle4", "background-color", 'rgba(1,16,27,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(55,165,253,1.00)'}], position: 4500, duration: 1500, easing: "linear" },
            { id: "eid211", tween: [ "transform", "#RoundRect7", "translateX", '33px', { valueTemplate: undefined, fromValue: '-312px'}], position: 6000, duration: 1635, easing: "linear" },
            { id: "eid204", tween: [ "transform", "#RoundRect7", "translateX", '595px', { valueTemplate: undefined, fromValue: '33px'}], position: 7635, duration: 2045, easing: "linear" },
            { id: "eid30", tween: [ "style", "#Rectangle4", "width", '958px', { valueTemplate: undefined, fromValue: '958px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid31", tween: [ "transform", "#Rectangle3", "translateX", '12px', { valueTemplate: undefined, fromValue: '12px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid36", tween: [ "style", "#Rectangle3", "width", '958px', { valueTemplate: undefined, fromValue: '958px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid88", tween: [ "style", "#RoundRect1", "border-bottom-right-radius", [400,400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [400,400]}], position: 0, duration: 0, easing: "linear" },
            { id: "eid39", tween: [ "color", "#Rectangle3", "background-color", 'rgba(15,156,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(15,156,38,1.00)'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid213", tween: [ "transform", "#RoundRect7", "translateY", '25px', { valueTemplate: undefined, fromValue: '145px'}], position: 6000, duration: 1635, easing: "linear" },
            { id: "eid205", tween: [ "transform", "#RoundRect7", "translateY", '-21px', { valueTemplate: undefined, fromValue: '25px'}], position: 7635, duration: 2045, easing: "linear" },
            { id: "eid151", tween: [ "color", "#RoundRect7", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 6000, duration: 0, easing: "linear" },
            { id: "eid2", tween: [ "style", "#stage", "height", '600px', { valueTemplate: undefined, fromValue: '600px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid209", tween: [ "transform", "#RoundRect8", "translateY", '48px', { valueTemplate: undefined, fromValue: '168px'}], position: 6000, duration: 1635, easing: "linear" },
            { id: "eid203", tween: [ "transform", "#RoundRect8", "translateY", '2px', { valueTemplate: undefined, fromValue: '48px'}], position: 7635, duration: 2045, easing: "linear" },
            { id: "eid44", tween: [ "color", "#RoundRect1", "background-color", 'rgba(255,236,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,236,0,1.00)'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid87", tween: [ "style", "#RoundRect1", "border-top-right-radius", [400,400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [400,400]}], position: 0, duration: 0, easing: "linear" },
            { id: "eid38", tween: [ "style", "#Rectangle3", "height", '186px', { valueTemplate: undefined, fromValue: '186px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid90", tween: [ "style", "#RoundRect1", "height", '207.67367485934px', { valueTemplate: undefined, fromValue: '207.67367485934px'}], position: 0, duration: 0, easing: "linear" }]
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
