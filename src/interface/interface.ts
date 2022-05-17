export interface User {
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    email: String,
    userType: String,
    interest:String,

}

export interface Otp {
    phoneNumber: Number,
    otp: String,
    createdAt: Date,
    timestamp: Number
}

export interface Trainer {
    trainerFirstName: String,
    trainerLastName: String,
    trainerPhoneNumber: String,
    trainerEmail: String,
    videoUrl: String,
    thumbnailUrl: String,
}

export interface Post {
    videoUrl: String,
    thumbnailUrl: String,
    description: String,
}

export interface Subscription {
    subscription: String,
    subscriptionDate: Number,
    subscriptionExpiry: Number,
    subscriptionPrice: Number
}

export interface Course {
    course: String
}

export interface Query {
    query: String
}
