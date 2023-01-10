import 'package:flutter/material.dart';
import 'package:http/http.dart'as http ;
import 'dart:convert';

void main() => runApp(MaterialApp(
  home: Products(),
));
class Products extends StatefulWidget {
  const Products({super.key});

  @override
  State<Products> createState() => _ProductsState();
}

class _ProductsState extends State<Products> {
  getProducts()async{
    String url ="http://localhost:3005/products";
// ignore: unused_local_variable
var res = await http.get(Uri.parse(url));
if(res.statusCode == 200){
  String _body = res.body;
  Map _json = jsonDecode(_body);;
}
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("My products"),),
      body: Center(
        child:FutureBuilder(
          future: getProducts(),
          builder: (context, snapshot) {
            if(snapshot.data !=null){

return ListView.builder(
  
  itemBuilder: (context, index) {
    return Card(
      elevation: 4,
      child: ListTile(
        title: Text(snapshot.data[index]['name']) ,
        subtitle: Text(snapshot.data[index]['desc']),
      ),

    );
  },
  itemCount: snapshot.data?.length,
  );
            }else{
 return  CircularProgressIndicator();
            }
           
          } ,
      ),
    );
  }
}