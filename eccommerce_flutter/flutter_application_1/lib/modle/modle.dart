
class Productfetch {
    List<Result>? result;

    Productfetch({this.result});

    Productfetch.fromJson(Map<String, dynamic> json) {
        result = json["result"] == null ? null : (json["result"] as List).map((e) => Result.fromJson(e)).toList();
    }

    Map<String, dynamic> toJson() {
        final Map<String, dynamic> _data = <String, dynamic>{};
        if(result != null) {
            _data["result"] = result?.map((e) => e.toJson()).toList();
        }
        return _data;
    }
}

class Result {
    String? id;
    String? name;
    String? desc;

    Result({this.id, this.name, this.desc});

    Result.fromJson(Map<String, dynamic> json) {
        id = json["id"];
        name = json["name"];
        desc = json["desc"];
    }

    Map<String, dynamic> toJson() {
        final Map<String, dynamic> _data = <String, dynamic>{};
        _data["id"] = id;
        _data["name"] = name;
        _data["desc"] = desc;
        return _data;
    }
}