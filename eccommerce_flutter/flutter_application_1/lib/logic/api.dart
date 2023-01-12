import 'package:flutter/widgets.dart';

import '../modle/modle.dart';
import 'package:http/http.dart'as http ;
import 'dart:convert';
import 'package:json_annotation/json_annotation.dart';


  class productapi{
   static Future<Productfetch> getData(BuildContext context)  async {
  
  var res = await http.get(Uri.parse('https://test-node-jxtl13bh6-mamd555.vercel.app/products'));
var data = jsonDecode(res.body.toString());
  if (res.statusCode == 200) {
    // If the server did return a 200 OK response,
return Productfetch.fromJson(data);



  }else{
   return Productfetch.fromJson(data);
  }

   }
  }

