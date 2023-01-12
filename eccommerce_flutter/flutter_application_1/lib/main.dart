import 'dart:html';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:json_annotation/json_annotation.dart';

import 'logic/api.dart';
import 'modle/modle.dart';

void main() => runApp(MaterialApp(
      title: 'test api',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        primaryColor: Colors.white,
        textTheme: TextTheme(
          bodyText2: TextStyle(color: Colors.white),
        ),
      ),
      home: Products(),
    ));

class Products extends StatefulWidget {
  @override
  _ProductsState createState() => _ProductsState();
}

class _ProductsState extends State<Products> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("My products"),
        ),
        body: FutureBuilder<Productfetch>(
            future: productapi.getData(context),
            builder: (context, snapshot) {
              return ListView.builder(
                  itemCount: snapshot.data!.result!.length,
                  itemBuilder: (context, index) {
                    return Column(
                      children: [
                        Text(index.toString())
                      ],
                    );
                  });
            }));
  }
}
