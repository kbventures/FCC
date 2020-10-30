const chunkArrayInGroups = require('../app');
var assert = require('chai').assert;


describe('Testing chunkArrayInGroups Function', function() {
    it('chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].', function() {
      assert.deepEqual(chunkArrayInGroups(["a", "b", "c", "d"], 2),[["a", "b"],["c", "d"]]);
    });

    it('chunkArrayInGroups([0,1,2,3,4,5], 3) should return [[0,1,2],[3,4,5]].', function() {
      assert.deepEqual(chunkArrayInGroups([0,1,2,3,4,5], 3),[[0,1,2], [3,4,5]]);
    });

    it('chunkArrayInGroups([0,1,2,3,4,5],2 should return [[0,1],[2,3],[4,5]].', function(){
      assert.deepEqual(chunkArrayInGroups([0,1,2,3,4,5],2),[[0,1],[2,3],[4,5]]);
    });
   
    it('chunkArrayInGroups([0,1,2,3,4,5],4 should return [[0,1,2,3,4],[4,5].', function(){
      assert.deepEqual(chunkArrayInGroups([0,1,2,3,4,5],4)[[0,1,2,3,][4,5]]);
    })

    it('chunkArrayInGroups([0,1,2,3,4,5,6],3 should return [[0,1,2],[3,4,5],[6]]', function(){
      assert.deepEqual(chunkArrayInGroups([0,1,2,3,4,5,6],3),[[0,1,2],[3,4,5],[6]]);
    });
    it('chunkArrayInGroups([0,1,2,3,4,5,6,7,8],4 should return [[0,1,2,3],[4,5,6,7]],[8]', function(){
      assert.deepEqual(chunkArrayInGroups([0,1,2,3,4,5,6,7,8],4),[[0,1,2,3],[4,5,6,7],[8]]);
    });

    it('chunkArrayInGroups([0,1,2,3,4,5,6,7,8],2 should return [[0,1],[2,3],[4,5],[6,7]],[8]', function(){
      assert.deepEqual(chunkArrayInGroups([0,1,2,3,4,5,6,7,8],2),[[0,1],[2,3],[4,5],[6,7],[8]]);
    });
});






