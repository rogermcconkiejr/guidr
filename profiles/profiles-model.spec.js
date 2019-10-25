const ProfileModel = require('./profiles-model');
const db = require('../data/dbConfig');

describe('should find a profile', ()=>{

    })
        it('finds a profile', async ()=>{
            
            profile = await ProfileModel.getById(1);
            expect (profile.id).toBe(1);
    
        })
