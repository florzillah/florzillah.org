async function __qbjs_run() {
/* global constants: */ 
/* shared variables: */ 
/* static method variables: */ 
async function main() {
QB.start(); QB.setTypeMap({ GXPOSITION:[{ name: 'x', type: 'LONG' }, { name: 'y', type: 'LONG' }], GXDEVICEINPUT:[{ name: 'deviceId', type: 'INTEGER' }, { name: 'deviceType', type: 'INTEGER' }, { name: 'inputType', type: 'INTEGER' }, { name: 'inputId', type: 'INTEGER' }, { name: 'inputValue', type: 'INTEGER' }], FETCHRESPONSE:[{ name: 'ok', type: 'INTEGER' }, { name: 'status', type: 'INTEGER' }, { name: 'statusText', type: 'STRING' }, { name: 'text', type: 'STRING' }]});
    await GX.registerGameEvents(function(e){});
    QB.sub_Screen(0);

/* implicit variables: */ var dev = 0;  /* SINGLE */ var shutdown_temp = 0;  /* SINGLE */ var shutdown_rip = 0;  /* SINGLE */ var version = 0;  /* SINGLE */ var website = 0;  /* SINGLE */ var typeofwebsite = 0;  /* SINGLE */ var errno = 0;  /* SINGLE */ var cmd = '';  /* STRING */ 
   QB.sub_Screen( (QB.func__NewImage(  9999,    9999,    8)));
   dev = "Website is in developpment";
   shutdown_temp = "Website has shut down temporarily";
   shutdown_rip = "Website has shut down forever";
   version = "08.22.2026";
   website = "florzillah.org";
   errno =  dev;
   await QB.sub_Print([ errno]);
   await QB.sub_Print([]);
   await QB.sub_Print([]);
   await QB.sub_Print([]);
   await QB.sub_Print([]);
   await QB.sub_Print([" Welcome to Florzillah.org's Command Terminal v0.1"]);
   await QB.sub_Print([" Type 'help' for commands"]);
   await QB.sub_Print(["--------------------------------------------------"]);
   cmd = "";
   var ___v5334240 = 0; ___l7055475: while ( cmd !=  "exit") { if (QB.halted()) { return; }___v5334240++;   if (___v5334240 % 100 == 0) { await QB.autoLimit(); }
      var ___v5795186 = new Array( 1); await QB.sub_Input(___v5795186, false, false, "> ");  cmd = ___v5795186[ 0]; 
      cmd = (QB.func_LCase(  cmd));
      await QB.sub_Print([""]);
      ___v3019480: { var ___v2895625 =  cmd; 
         if (___v2895625 == "help") {___v7747401: { 
         await QB.sub_Print([" Available commands:"]);
         await QB.sub_Print(["   status  - Shows site status"]);
         await QB.sub_Print(["   version - Displays current version"]);
         await QB.sub_Print(["   cls   - Clears the screen"]);
         await QB.sub_Print(["   website   - Prints the websites name"]);
         } } else if (___v2895625 == "status") {___v140176: { 
         await QB.sub_Print([" Status: ",QB.PREVENT_NEWLINE,  dev]);
         } } else if (___v2895625 == "version") {___v7607236: { 
         await QB.sub_Print([" Version: ",QB.PREVENT_NEWLINE,  version]);
         } } else if (___v2895625 == "cls") {___v8144900: { 
         QB.sub_Cls(undefined, undefined);
         } } else if (___v2895625 == "website") {___v7090379: { 
         await QB.sub_Print([ website]);
         } } else if (___v2895625 == "to the window") {___v453528: { 
         await QB.sub_Print(["to the wall"]);
         } } else if (___v2895625 == "when will the website be finished") {___v4140327: { 
         await QB.sub_Print(["never"]);
         } } else if (___v2895625 == "") {___v8626193: { 
         } } else { ___v7904800: { 
         await QB.sub_Print([" Unknown command: '",QB.PREVENT_NEWLINE,  cmd,QB.PREVENT_NEWLINE, "'. Type 'help' for options."]);
       }  } } 
      await QB.sub_Print([""]);
   }
QB.end();
} await main();


}
