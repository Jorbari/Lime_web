import React from "react";
import { SketchPicker } from "react-color";
import {
  MainContainer,
  ContentHeader,
  SectionContainer,
  Section,
  SectionHeading,
  InputGroup,
  InputLabel,
  ColorGrid,
  ColorPreview,
  AddColorButton,
} from "./design.styles";

class Design extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show_background_colour_picker: false,
      backgroundColour: "transparent",
      selected_background_colour_tag: 0,

      show_theme_colour_picker: false,
      themeColour: "#fff",
      selected_theme_colour_tag: 0,
    };
  }

  //   Theme_colour setup

  default_theme_colors = [
    {
      id: 1,
      color_name: "purple",
      colour: "#800080",
    },
    {
      id: 2,
      color_name: "pink",
      colour: "#FFC0CB",
    },
    {
      id: 3,
      color_name: "red",
      colour: "#FF0000",
    },
    {
      id: 4,
      color_name: "orange",
      colour: "#FFA500",
    },
    {
      id: 5,
      color_name: "turquoise",
      colour: "#40E0D0",
    },
  ];

  handleThemeColourChange = (color) => {
    this.setState({ themeColour: color.hex });
  };

  cancelThemeColourChange = () => {
    this.setState({
      themeColour: "#fff",
      show_theme_colour_picker: false,
    });
  };
  pick_from_theme_template = (colour_info) => {
    this.setState({
      themeColour: colour_info.colour,
      selected_theme_colour_tag: colour_info.id,
    });
  };
  addThemeColourPicker = () => {
    const colour_data = {
      id: 6,
      color_name: this.state.themeColour,
      colour: this.state.themeColour,
    };
    this.default_theme_colors[5] = colour_data;
    this.setState({
      show_theme_colour_picker: false,
      selected_theme_colour_tag: colour_data.id,
    });
  };

  //   Background Colour
  default_background_colors = [
    {
      id: 1,
      color_name: "",
      colour: "",
    },
  ];

  handleBackgroundColourChange = (color) => {
    this.setState({ backgroundColour: color.hex });
  };
  pick_from_background_template = (colour_info) => {
    this.setState({
      backgroundColour: colour_info.colour,
      selected_background_colour_tag: colour_info.id,
    });
  };
  addBackgroundColourPicker = () => {
    const colour_data = {
      id: 2,
      color_name: this.state.backgroundColour,
      colour: this.state.backgroundColour,
    };
    this.default_background_colors[1] = colour_data;
    this.setState({
      show_background_colour_picker: false,
      selected_background_colour_tag: colour_data.id,
    });
  };
  cancelBackgroundColourChange = () => {
    this.setState({
      backgroundColour: "transparent",
      show_background_colour_picker: false,
    });
  };

  render() {
    return (
      <>
        <MainContainer>
          {/* theme colour picker */}
          <div
            className={`theme_colour_picker ${
              this.state.show_theme_colour_picker ? "" : "hidden"
            }`}
          >
            <SketchPicker
              color={this.state.themeColour}
              onChangeComplete={this.handleThemeColourChange}
            />
            <section>
              <button onClick={this.cancelThemeColourChange}>Cancel</button>
              <button onClick={this.addThemeColourPicker}>Add</button>
            </section>
          </div>
          {/* Background colour picker */}
          <div
            className={`background_colour_picker ${
              this.state.show_background_colour_picker ? "" : "hidden"
            }`}
          >
            <SketchPicker
              color={this.state.backgroundColour}
              onChangeComplete={this.handleBackgroundColourChange}
            />
            <section>
              <button onClick={this.cancelBackgroundColourChange}>
                Cancel
              </button>
              <button onClick={this.addBackgroundColourPicker}>Add</button>
            </section>
          </div>

          <ContentHeader>
            <h4 className="heading__4">Design</h4>
            <span>
              <svg
                width="19"
                height="12"
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM19 5.25L1 5.25V6.75L19 6.75V5.25Z"
                  fill="#5B5656"
                />
              </svg>
            </span>
          </ContentHeader>
          <SectionContainer>
            <Section>
              <SectionHeading>Heading</SectionHeading>
              <InputGroup>
                <input type="file" name="image" id="image" accept="image/*" />
                <InputLabel htmlFor="image">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM11.14 8.86L8.14 12.73L6 10.14L3 14H15L11.14 8.86Z"
                      fill="#5B5656"
                    />
                  </svg>
                  <span>Choose Image</span>
                </InputLabel>
              </InputGroup>
            </Section>
            <Section>
              <SectionHeading>Theme colour</SectionHeading>
              <ColorGrid>
                {this.default_theme_colors.map((colors) => (
                  <ColorPreview
                    key={colors.id}
                    color={colors.color_name}
                    onClick={() => this.pick_from_theme_template(colors)}
                    className={
                      colors.id === this.state.selected_theme_colour_tag
                        ? "active"
                        : ""
                    }
                  ></ColorPreview>
                ))}

                <AddColorButton
                  onClick={() =>
                    this.setState({ show_theme_colour_picker: true })
                  }
                />
              </ColorGrid>
            </Section>
            <Section>
              <SectionHeading>Background colour</SectionHeading>
              <ColorGrid>
                {this.default_background_colors.map((colors) => (
                  <ColorPreview
                    key={colors.id}
                    color={colors.color_name}
                    onClick={() => this.pick_from_background_template(colors)}
                    className={
                      colors.id === this.state.selected_background_colour_tag
                        ? "active"
                        : ""
                    }
                  ></ColorPreview>
                ))}
                <AddColorButton
                  onClick={() =>
                    this.setState({ show_background_colour_picker: true })
                  }
                />
              </ColorGrid>
            </Section>
          </SectionContainer>
        </MainContainer>
      </>
    );
  }
}

export default Design;
