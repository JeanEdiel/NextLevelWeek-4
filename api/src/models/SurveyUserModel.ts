import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { SurveyModel } from './SurveyModel';
import { UserModel } from './UserModel';

@Entity("surveys_users")
class SurveyUserModel
{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => UserModel)
    @JoinColumn({ name: "user_id" })
    user: UserModel;

    @Column()
    survey_id: string;

    @ManyToOne(() => SurveyModel)
    @JoinColumn({ name: "survey_id" })
    survey: SurveyModel;

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;

    constructor()
    {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { SurveyUserModel };
