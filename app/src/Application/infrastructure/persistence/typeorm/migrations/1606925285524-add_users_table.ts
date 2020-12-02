import {MigrationInterface, QueryRunner} from "typeorm";

export class addUsersTable1606925285524 implements MigrationInterface {
    name = 'addUsersTable1606925285524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`_id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `created_at` datetime NOT NULL, `update_at` datetime NOT NULL, PRIMARY KEY (`_id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `users`");
    }

}
