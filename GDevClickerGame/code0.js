gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDTileBGObjects1= [];
gdjs.Untitled_32sceneCode.GDTileBGObjects2= [];
gdjs.Untitled_32sceneCode.GDClickButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDClickButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDClickTextObjects1= [];
gdjs.Untitled_32sceneCode.GDClickTextObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ClickButton"), gdjs.Untitled_32sceneCode.GDClickButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDClickButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDClickButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDClickButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDClickButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDClickButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ClickText"), gdjs.Untitled_32sceneCode.GDClickTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDClickTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDClickTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDTileBGObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTileBGObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDClickButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDClickButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDClickTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDClickTextObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
