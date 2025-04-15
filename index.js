#!/usr/bin/env node

const { program } = require("commander");
const { createComponent } = require("./generators/createComponent");

program
  .command("g <type> <name>")
  .description("Generate a component or screen with full structure")
  .action((type, name) => {
    createComponent(type, name);
  });

program.parse(process.argv);

