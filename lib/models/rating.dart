import 'dart:convert';

class Rating {
  final String userId;
  final double rating;

  Rating(this.userId, this.rating);

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'userId': userId,
      'rating': rating,
    };
  }

  factory Rating.fromMap(Map<String, dynamic> map) {
    return Rating(
      map['userId'] as String,
      map['rating'] as double,
    );
  }

  String toJson() => json.encode(toMap());

  factory Rating.fromJson(String source) =>
      Rating.fromMap(json.decode(source) as Map<String, dynamic>);
}
