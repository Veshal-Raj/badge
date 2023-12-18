// What is the output?

const settings = {
    username: 'Veshal',
    level: 21,
    health: 98,
};

const data = JSON.stringify(settings, ["level", "health"])
console.log(data) // it will only stirngify the level and health keys in the settings