$(document).ready(function() {
  var nextTest, jsonDataBad, JSONdata, temp, test1;
  /**
   * Describe this function...
   */
  function Test1() {
    // Block#: 14
    temp = '<h1>Test 1</h1>';
    // Block#: 258
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 11
    test1 = (com.fc.JavaScriptDistLib.JSON.parseJSONData(JSONdata));
    // Block#: 16
    var key_list = (com.fc.JavaScriptDistLib.Dictionary.getKeys(test1));
    for(var key_index in key_list) {
      key = key_list[key_index];
      // Block#: 19
      temp = [temp, '<br>', key].join('');
    }
    // Block#: 54
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
  }
  /**
   * Describe this function...
   */
  function Test2() {
    // Block#: 242
    temp = '<h1>Test 2</h1>';
    // Block#: 260
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 240
    com.fc.JavaScriptDistLib.JSON.parseJSONDataWithCallback(JSONdata,
      function(parsed_json) {
        // Block#: 244
        var key_list2 = (com.fc.JavaScriptDistLib.Dictionary.getKeys(parsed_json));
        for(var key_index2 in key_list2) {
          key = key_list2[key_index2];
          // Block#: 247
          temp = [temp, '<br>', key].join('');
          // Block#: 254
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
        }
      },
      function(error_message) {
      });
  }
  /**
   * Describe this function...
   */
  function Test3() {
    // Block#: 291
    temp = '<h1>Test 3</h1>';
    // Block#: 293
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 295
    com.fc.JavaScriptDistLib.JSON.parseJSONDataWithCallback(jsonDataBad,
      function(parsed_json) {
      },
      function(error_message) {
        // Block#: 309
        temp = [temp, '<br>', error_message].join('');
        // Block#: 305
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
      });
  }
  /**
   * Describe this function...
   */
  function Test4() {
    // Block#: 315
    temp = '<h1>Test 4</h1>';
    // Block#: 317
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 335
    temp = [temp, '<br>', (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(JSONdata, '$.address.postalCode'))].join('');
    // Block#: 456
    temp = [temp, '<br>', (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(JSONdata, '$.phoneNumbers[1].type'))].join('');
    // Block#: 342
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
  }
  /**
   * Describe this function...
   */
  function Test5() {
    // Block#: 219
    temp = '<h1>Test 5</h1>';
    // Block#: 256
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 510
    if(com.fc.JavaScriptDistLib.JSON.isValidJSON(JSONdata)) {
      // Block#: 513
      temp = String(temp) + String('<br>jsonData is valid JSON');
    } else {
      // Block#: 517
      temp = String(temp) + String('<br>jsonData is NOT valid JSON');
    }
    // Block#: 490
    if(com.fc.JavaScriptDistLib.JSON.isValidJSON(jsonDataBad)) {
      // Block#: 224
      temp = String(temp) + String('<br>jsonDataBad is valid JSON');
    } else {
      // Block#: 495
      temp = String(temp) + String('<br>jsonDataBad is NOT valid JSON');
    }
    // Block#: 229
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
  }
  /**
   * Describe this function...
   */
  function Test6() {
    // Block#: 363
    temp = '<h1>Test 6</h1>';
    // Block#: 365
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 367
    test1 = {
      'family': ['Paperino', 'Paperina', 'Qui', 'Quo', 'Qua'],
    };
    // Block#: 373
    temp = [temp, '<br>', (com.fc.JavaScriptDistLib.JSON.covertToJSON(test1))].join('');
    // Block#: 378
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
  }
  /**
   * Describe this function...
   */
  function Test7() {
    // Block#: 381
    temp = '<h1>Test 7</h1>';
    // Block#: 383
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp); // Block#: 385
    test1 = (com.fc.JavaScriptDistLib.JSON.parseJSONData(jsonDataBad));
    // Block#: 388
    var key_list3 = (com.fc.JavaScriptDistLib.Dictionary.getKeys(test1));
    for(var key_index3 in key_list3) {
      key = key_list3[key_index3];
      // Block#: 391
      temp = [temp, '<br>', key].join('');
    }
    // Block#: 396
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", temp);
  }
  // Block#: 1
  function on_Button_click(e) {
    try {
      // Block#: 91
      com.fc.JavaScriptDistLib.Button.setProperty["Text"]("Button", 'Run next test'); // Block#: 130
      if(nextTest == 1) {
        // Block#: 2
        Test1();
        // Block#: 233
        nextTest = 2;
      } else if(nextTest == 2) {
        // Block#: 200
        Test2();
        // Block#: 231
        nextTest = 3;
      } else if(nextTest == 3) {
        // Block#: 207
        Test3();
        // Block#: 287
        nextTest = 4;
      } else if(nextTest == 4) {
        // Block#: 352
        Test4();
        // Block#: 289
        nextTest = 5;
      } else if(nextTest == 5) {
        // Block#: 361
        Test5();
        // Block#: 407
        nextTest = 6;
      } else if(nextTest == 6) {
        // Block#: 439
        Test6();
        // Block#: 409
        nextTest = 7;
      } else {
        // Block#: 450
        Test7();
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button"]').on('click', on_Button_click);
  // Block#: 3
  function on_Button2_click(e) {
    try {
      // Block#: 4
      JSONdata = '{ "firstName": "John", "lastName" : "doe", "age" : 26, "address"  : { "streetAddress": "naist street", "city" : "Nara", "postalCode"   : "630-0192" }, "phoneNumbers": [ { "type"  : "iPhone", "number": "0123-4567-8888" }, { "type"  : "home", "number": "0123-4567-8910" } ] }';
      // Block#: 214
      jsonDataBad = '{ "firstName": "John", "lastName" : "doe", "age" : 26, "address"  : { "streetAddress": "naist street", "city" : "Nara", "postalCode"   : "630-0192" }, "phoneNumbers": [ { "type"  : "iPhone", "number": "0123-4567-8888" }, { "type"  : "home", "number": "0123-4567-8910" }]';
      // Block#: 6
      com.fc.JavaScriptDistLib.Button.setProperty["Text"]("Button2", 'initliazed!'); // Block#: 8
      com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("Button2", '#009900'); // Block#: 101
      nextTest = 1;
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button2"]').on('click', on_Button2_click);
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 129084-35689-734553-130027
