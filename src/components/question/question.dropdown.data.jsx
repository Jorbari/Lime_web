import React from "react";
import { ReactComponent as MultichoiceIcon } from "../../assets/multichoice.svg";
import { ReactComponent as CheckboxIcon } from "../../assets/checkbox.svg";
import { ReactComponent as DropdownIcon } from "../../assets/dropdown.svg";
import { ReactComponent as LinearIcon } from "../../assets/linearscale.svg";
import { ReactComponent as Paragraph } from "../../assets/paragraph.svg";
import { ReactComponent as ShortanswerIcon } from "../../assets/shortanswer.svg";
import {
  questionFormatTypes,
  setFormat,
} from "../../redux/questions/questions.utils";

export const questionDropdownData = ()=>(
    {
        multichoice:<div
        className="dropdown-item"
        key="1"
        id={`${questionFormatTypes.multichoice}`}
        >
        <MultichoiceIcon />
        <span>Multiple choice questions</span>
        </div>,
        checkbox:<div
        className="dropdown-item"
        key="2"
        id={`${questionFormatTypes.checkbox}`}
        >
        <CheckboxIcon />
        <span>Checkboxes</span>
        </div>,
        dropdown:<div
        className="dropdown-item"
        key="3"
        id={`${questionFormatTypes.dropdown}`}
        >
        <DropdownIcon />
        <span>Dropdown</span>
        </div>,
        linearscale:<div
        className="dropdown-item"
        key="4"
        id={`${questionFormatTypes.linearscale}`}
        >
        <LinearIcon />
        <span>Linear scale</span>
        </div>,
        shortanswer:<div
        className="dropdown-item"
        key="5"
        id={`${questionFormatTypes.shortanswer}`}
        >
        <ShortanswerIcon />
        <span>Short answer</span>
        </div>,
        paragraph:<div
        className="dropdown-item"
        key="6"
        id={`${questionFormatTypes.paragraph}`}
        >
        <Paragraph />
        <span>Paragraph</span>
        </div>
    }
)


