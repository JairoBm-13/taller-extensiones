/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['model/memberEdadModel'], function() {
    App.Model.MemberEdadModel = Backbone.Model.extend({
        defaults: {
         'name' : '',
         'age' : ''
        },
        getDisplay: function(name) {
         return this.get(name);
        }
        });
    App.Model.MemberEdadList = Backbone.Collection.extend({
        model: App.Model.MemberEdadModel
    });
    return  App.Model.MemberEdadModel;
});

