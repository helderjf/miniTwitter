// import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';


export const Twits = new Mongo.Collection('twits');



if (Meteor.isServer) {
    Meteor.publish('twits', () => {
        return Twits.find({});
    })
}


Meteor.methods({
    'twits.publishTwit'(text) {
        Twits.insert(
            {
                text,
                user: this.userId,
                username: Meteor.users.findOne(this.userId).emails[0].address,
                createdAt: new Date()
            }
        );
    },
    'twits.deleteTwit'(twitID) {
        Twits.remove(twitID);
    },
    'twits.likeTwit'(twitID) {
        if (Twits.find({ _id: twitID, 'likes.user': this.userId }).count()>0) {
            Twits.update({ _id: twitID }, { $pull: { likes: { user: this.userId } } });
        } else {
            Twits.update({ _id: twitID }, { $push: { likes: { user: this.userId } } });
        }
    }
});