/**
 * GRAPHS- simply put its nodes + connection
 * A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, 
 * together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for
 * a directed graph.
 * 
 */

/**
 * USES- used almost everywhere
 * - Google maps, Recommedations ("People u might know", "Frequently bought together", "You may also like"...)
 */

/**
 * Key terminologies -
 * 1. Vertex - node, edge - a connection between two vertices
 * 2. Directed/Undirected- directions assigned between vertices
 * 3. Weighte/Unweighted - values assigned to edges as a distances between vertices
 */

/**
 * Two ways of storing the graph in data structure-
 * 1. Adjacency matrix - 2-D matrix storing binary/boolean flag to know if row ith node has relation with jth column node
 * 2. Adjacency list - indexes/keys refer to the node and values is an array storing its adjacent nodes (We'll use this)
 */