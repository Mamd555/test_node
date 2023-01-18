import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_application_1/logic/api.dart';
import 'package:flutter_application_1/main.dart';
import 'package:http/http.dart'as http ;

import '../modle/modle.dart';
class InserProduct extends StatefulWidget {
  const InserProduct({super.key});

  @override
  State<InserProduct> createState() => _InserProductState();
}

class _InserProductState extends State<InserProduct> {
  var formkey =GlobalKey<FormState>();
  TextEditingController name = TextEditingController();
  TextEditingController desc = TextEditingController();
  TextEditingController price = TextEditingController();
   late Map<String,dynamic> data;
   Future<Result> PostData(BuildContext context)  async {
  
  var res = await http.post(Uri.parse('https://test-node-bn1j.vercel.app/products'),
   body: {"name" : name.text ,"desc":desc.text,"price":price.text},
   headers: {"Content-Type":"application/x-www-form-urlencoded"}
  );
this.setState(() {
   data = jsonDecode(res.body.toString());
});

  if (res.statusCode == 200) {
    // If the server did return a 200 OK response,
return Result.fromJson(data);



  }else{
   return Result.fromJson(data);
  }

   }
     @override
   void initStatPe() {
     super.initState();
     this.PostData(context);
   }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
body: Center(
  child: Container(
    padding: EdgeInsets.all(20),
    child: SingleChildScrollView(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
    
    Form(
      key:formkey ,
      child: Column(
        children: [
          TextFormField(
            decoration: InputDecoration(border: OutlineInputBorder(),hintText: "enter your name"),
            validator: (value) {
              if(value == null){
                return "add name" ;
              } return null;
            },
            controller:name ,
          ),
          SizedBox(height:20 ,),
          TextFormField(
             decoration: InputDecoration(border: OutlineInputBorder(),hintText: "enter your description"),
            validator: (value) {
              if(value == null){
                return "add descraption" ;
              } return null;},
            controller:desc ,
          ),
          SizedBox(height:20 ,),
          TextFormField(
             decoration: InputDecoration(border: OutlineInputBorder(),hintText: "enter your price"),
             validator: (value) {
              if(value == null){
                return "add price" ;
              } return null;},
            controller:price ,
          ),
          ElevatedButton(
            onPressed: (){
              PostData(context);
              Navigator.push(context,MaterialPageRoute(builder: ((context) => HomeProduct())));
            }, 
            child: Text("Insert Product"))
        ],
      ))
        ],
      ),
    ),
  ),
),
    );
  }
}