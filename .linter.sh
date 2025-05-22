#!/bin/bash
cd /home/kavia/workspace/code-generation/italiagusto-a-culinary-journey-through-italy-95520-95526/main_container_for_italia_gusto
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

