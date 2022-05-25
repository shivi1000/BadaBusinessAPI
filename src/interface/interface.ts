export interface User {
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    email: String,
    userType: String,
    interest:String,
}

export interface Trainer {
    trainerFirstName: String,
    trainerLastName: String,
    trainerPhoneNumber: String,
    trainerEmail: String,
}

export interface Admin {
    adminFirstName: String,
    adminLastName: String,
    adminPhoneNumber: String,
    adminEmail: String,
}

export interface Post {
    videoUrl: String,
    thumbnailUrl: String,
    description: String,
    duration: String,
    category: String
}

export interface browseCourses {
    imageUrl: String,
    description: String,
    courseDuration: String,
    category: String,
    numberOfVideos: String,
}

export interface myCourses{
    imageUrl: String,
    description: String,
    courseDuration: String,
    category: String,
    numberOfVideos: String,
}

export interface Content{
    courseHighlights: String,
    keyLearnings: String,
    courseBenefitsAndOutcomes: String,
    aboutProfessors: String,
}

