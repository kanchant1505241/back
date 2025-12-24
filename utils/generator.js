import otpGenerator from 'otp-generator'


export const generateotp = () =>{
 return otpGenerator.generate(6, {uppercase:false, specialChars:false})
}
// console.log(generateotp());

