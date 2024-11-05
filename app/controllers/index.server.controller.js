exports.render = function(req, res) {
    const name = "Antonio Diaz";
    const listTitle = "The MEAN Stack";
    const definitions = [
        { title: "MongoDB", description: "MongoDB is a document-based NoSQL database designed to handle large data volumes with high scalability and flexibility." },
        { title: "Express", description: "Express.js is a web application framework for Node.js, offering features to build web and mobile applications quickly." },
        { title: "Angular", description: "Angular is a TypeScript-based front-end web application framework maintained by Google and designed for building single-page applications." },
        { title: "Node.js", description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side JavaScript execution." }
    ];
    
    res.render('index', {
        name: name,
        listTitle: listTitle,
        definitions: definitions
    });
};