


class Result {
    String? id;
    String? name;
    String? desc;
    String? price;

    List<Result>? result;

    Result({this.id,this.price, this.name, this.desc,this.result});

    Result.fromJson(Map<String, dynamic> json) {
        id = json["id"];
        name = json["name"];
        desc = json["desc"];
        price = json["price"];
        result = json["result"] == null ? null : (json["result"] as List).map((e) => Result.fromJson(e)).toList();
    }

    Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data["id"] = id;
        data["name"] = name;
        data["desc"] = desc;
        data ["price"] = price;
       data["result"] = result?.map((e) => e.toJson()).toList();
        return data;
    }
}