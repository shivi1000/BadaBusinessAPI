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
    trainnerfirstName: String,
    trainnerlastName: String,
    trainnerPhoneNumber: Number,
    trainnerEmail: String,
    experience: Number,
    specialization: String,
    videoUrl: String,
    thumbnailUrl: String,
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
