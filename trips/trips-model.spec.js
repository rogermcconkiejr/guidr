const TripModel = require('./trips-model');
const db = require('../data/dbConfig');

describe('should find a trip', ()=>{

    })
        it('finds a trip', async ()=>{
            
            trip = await TripModel.getById(1);
            expect (trip.id).toBe(1);
    
        })

