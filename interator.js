/* 
输入: [5,[4],[3,[]],[2,1]]
输出: [5,4,3,2,1]
解释: 所有数字和列表都需要用KNode包裹，注意空列表和嵌套空列表。上述输入将被这样构造： 
const kNodes = new KNode([
  new KNode(5),
  new KNode([new KNode(4)]),
  new KNode([new KNode(3), new KNode([])]),
  new KNode([new KNode(2), new KNode(1)]),
]);
重复调用 next 直到 hasNext 返回false，next 返回的元素的顺序应该是: [5,4,3,2,1]。

输入: [1,[3,[7]],8]
输出: [1,3,7,8]

*/
//1.	假设你的同事写了一个资源节点类KNode，



//它里面可能存着单个int（表示资源ID），也可能存着一个KNode列表，表示一组资源节点
class KNode {
    value;
  
    constructor(v) {
      this.value = v;
    }
  
    getInt() {
        if(v instanceof Array){
            return null
        }
        if(this.isInt()){
            return this.value
        }
    } // return number
  
    isInt() {
        if(this.value%1===0) {
            return true
        } else {
            return false
        }
    } // return boolean
  
    getList() {
        if(v instanceof Array){
            return v
        } else {
            return null
        }
    } // return [KNode]: KNode对象的数组
}

class KNodeIterator {
kNodes;

    constructor(v) {
        this.kNodes = v; // 要求O(1)
        this.head = null
        this.stack = []
        
        let flat = v => {
            for(let i of v){
                if(i.isInt()){
                    this.stack.push(i.getInt())
                } else {
                    this.flat(i.getList())
                }
            }
        }
        flat(v)
        
    }




hasNext() {
    return !this.stack.length
} // return boolean 要求平均时间复杂度O(1): 大多数情况下O(1), 最坏情况下允许O(N

next() {
    console.log(this.stack)
    return this.stack.shift()

} // return number 要求O(1)
}

const kNodes = new KNode([
    new KNode(5),
    new KNode([new KNode(4)]),
    new KNode([new KNode(3), new KNode([])]),
    new KNode([new KNode(2), new KNode(1)]),
  ]);

const iter = new KNodeIterator(kNodes);



while (iter.hasNext()) {
    const resourceId = iter.next();
    console.log('resourceId - ', resourceId);
}






  