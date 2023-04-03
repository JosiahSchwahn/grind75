/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    // 4 cases:
    // 1.) p and q are both less then root
    // 2.) if p and q are greater then the root
    // 3.) if p or q is greater then root and p or q is less than root 
    // 4.) p or q = root

    while(true){

        if(p.val > root.val && q.val > root.val){
            root = root.right
        }
        else if (p.val < root.val && q.val < root.val){
            root = root.left
        }
        else return root;

    }
    

};