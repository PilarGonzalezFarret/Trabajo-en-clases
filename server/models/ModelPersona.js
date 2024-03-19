import mongoose from "mongoose"

const PersonaSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required."]
        },
        lastName: {
            type: String,
            required: [true, "Last name is required."]
        },
        mail: {
            type: String,
            required: [true, "Mail is required."],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Password is required."],
            minlenght: [8, "Password must be at least 8 characters."]
        },
        confirmPassword: {
            type: String,
            required: [true, "Password is required."]
        }
    },
    {timestamps:true}
)

const Persona = mongoose.model('Persona',PersonaSchema);
export default Persona;