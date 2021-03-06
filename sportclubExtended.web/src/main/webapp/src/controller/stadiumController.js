/* ========================================================================
 * Copyright 2014 monitor
 *
 * Licensed under the MIT, The MIT License (MIT)
 * Copyright (c) 2014 monitor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 * ========================================================================


Source generated by CrudMaker version 1.0.0.201408112050

*/
define(['controller/_stadiumController','delegate/stadiumDelegate'], function() {
    App.Controller.StadiumController = App.Controller._StadiumController.extend({
        language: function(){
            alert('Usted est� viendo la versi�n en ESPA�OL de esta p�gina');
        },
        capacity : function(params){
            var mensaje = "";
            var exp = params.cap;
            if(exp <=200){
                mensaje = "El estadio es mini";
            }
            else if(exp > 200 && exp <= 600){
                mensaje = "El estadio es medio";
            }
            else if( exp >= 601){
                mensaje = "El estadio es grande";
            }
            alert(mensaje);
        }
    });
    return App.Controller.StadiumController;
}); 