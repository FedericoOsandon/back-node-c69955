import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UsersDocument = HydratedDocument<User>

@Schema()
export class User {
    @Prop({required: true})
    first_name:string;

    @Prop()
    last_name:string;

    @Prop({required: true, unique: true})
    email:string
}

export const UserSchema = SchemaFactory.createForClass(User)