import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: User.USER_TABLE_NAME
})
export class User extends Model {
    public static USER_TABLE_NAME = "user" as string;
    public static USER_ID = "id" as string;
    public static USER_NAME = "name" as string;
    public static USER_AGE = "age" as string;
    public static USER_ADDRESS = "address" as string;

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: User.USER_ID
    })
    id!: number

    @Column({
        type: DataType.STRING(100),
        field: User.USER_NAME
    })
    name!: string

    @Column({
        type: DataType.INTEGER,
        field: User.USER_AGE
    })
    age!: number

    @Column({
        type: DataType.STRING(100),
        field: User.USER_ADDRESS
    })
    address!: string
}