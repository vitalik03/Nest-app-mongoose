import { Injectable } from '@nestjs/common';
import { IUser } from './interface/user.interface';

@Injectable()
export class UsersService {
    async getAll(){
        const users = await [
            {
                id: 1,
                name: 'Vova',
                email: 'vova@mail.com'
            },
            {
                id: 2,
                name: 'Yura',
                email: 'yura@mail.com'
            },
            {
                id: 3,
                name: 'Roman',
                email: 'roman@mail.com'
            }
        ];
        return users;
    }
    async create(item: IUser){
        const new_item = item;
        return await new_item;
    }

    async createOnPut(item: IUser){
        const new_item = item;
        return await new_item;
    }

    async Ondelete(){
        return 'sucess';
    }
}
