const UserModel = require('./users-model');
const db = require('../data/dbConfig');

describe('should find user', ()=>{

    })
        it('find a user', async ()=>{
            
            user = await UserModel.findById(1);
            expect (user.username).toBe('Testing');
    
        })


        describe('register user', ()=>{
            beforeEach(async ()=>{
                await db('users').truncate();
            })
                it('should add user to database', async ()=>{
                    const records = await db('users');
                    expect(records).toHaveLength(0);
                    
                    user = await UserModel.add({ username: 'Testing', password: 'testingpass' });
                    expect (user.username).toBe('Testing');
            
                    const users = await db('users');
                    expect (users).toHaveLength(1);
                })
            })

            describe('profiles', ()=>{
                beforeEach(async ()=>{
                    await db('profiles').truncate();
                })
                    it('should add a profile to the database', async ()=>{
                        const records = await db('profiles');
                        expect(records).toHaveLength(0);
                        
                        profile = await UserModel.addUserProfile(
                        {     
                        user_id: 1,
                        title: "Mountain Man",
                        tagline: "I move mountains for you.",
                        guideSpecialty: "Climbing",
                        age: 55,
                        yearsExperience: 5
                        }
                        );
                
                        const profiles = await db('profiles');
                        expect (profiles).toHaveLength(1);
                    })
                })

                describe('trips', ()=>{
                    beforeEach(async ()=>{
                        await db('trips').truncate();
                    })
                        it('should add a trip to the database', async ()=>{
                            const records = await db('trips');
                            expect(records).toHaveLength(0);
                            
                            trip = await UserModel.addUserTrip(
                                { 
                                    title: "asdf",
                                    image: "img",
                                    description: "asdf",
                                    isPrivate: 0,
                                    isProfessional: 0,
                                    duration: "asdf",
                                    distance: "asdf",
                                    date: "2019-10-02",
                                    tripType: "asdf",
                                    user_id: 10
                                }
                                );
                    
                            const trips = await db('trips');
                            expect (trips).toHaveLength(1);
                        })
                    })