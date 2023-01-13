 import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart'as http ;
import '../modle/modle.dart';

class Productapi{
   static Future<Result> getData(BuildContext context)  async {
  
  var res = await http.get(Uri.parse('https://test-node-bn1j.vercel.app/products'));
var data = jsonDecode(res.body.toString());
  if (res.statusCode == 200) {
    // If the server did return a 200 OK response,
return Result.fromJson(data);



  }else{
   return Result.fromJson(data);
  }

   }
  }
