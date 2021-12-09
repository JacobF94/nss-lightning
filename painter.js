let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    addTool: (tool) => {
        painter.tools.push(tool)
    }
  }

painter.addTool("ladder")
console.log(painter.tools)