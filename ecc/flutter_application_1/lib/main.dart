import 'package:flutter/material.dart';
import 'package:flutter_application_1/logic/api.dart';
import 'package:flutter_application_1/modle/modle.dart';
import 'package:flutter_application_1/views/insertProducr.dart';




void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const InserProduct(),
    );
  }
}

class HomeProduct extends StatefulWidget {
  const HomeProduct({super.key});

  @override
  State<HomeProduct> createState() => _HomeProductState();
}

class _HomeProductState extends State<HomeProduct> {
   
  
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("My products"),
        ),
        body: FutureBuilder<Result>(
            future:Productapi.getData(context),
            builder: (context, snapshot) {
              if(snapshot.hasData){
         return ListView.builder(
                 itemCount: snapshot.data?.result!.length,
                itemBuilder: (context, index) {
              return Card(
                elevation: 4,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Text(snapshot.data!.result![index].id.toString()),
                    Text(snapshot.data!.result![index].price.toString()),
                    ListTile(
                  title: Text(snapshot.data!.result![index].name.toString()),
                  subtitle: Text(snapshot.data!.result![index].desc.toString()),
                ),
                  ],
                )
      );
              });
              }else{
                return Text('Loading');
              }
     
            }));
  }
}

