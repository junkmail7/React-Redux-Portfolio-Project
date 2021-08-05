require "application_system_test_case"

class TricksTest < ApplicationSystemTestCase
  setup do
    @trick = tricks(:one)
  end

  test "visiting the index" do
    visit tricks_url
    assert_selector "h1", text: "Tricks"
  end

  test "creating a Trick" do
    visit tricks_url
    click_on "New Trick"

    fill_in "Difficulty", with: @trick.difficulty
    fill_in "Name", with: @trick.name
    fill_in "Type of trick", with: @trick.type_of_trick
    click_on "Create Trick"

    assert_text "Trick was successfully created"
    click_on "Back"
  end

  test "updating a Trick" do
    visit tricks_url
    click_on "Edit", match: :first

    fill_in "Difficulty", with: @trick.difficulty
    fill_in "Name", with: @trick.name
    fill_in "Type of trick", with: @trick.type_of_trick
    click_on "Update Trick"

    assert_text "Trick was successfully updated"
    click_on "Back"
  end

  test "destroying a Trick" do
    visit tricks_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Trick was successfully destroyed"
  end
end
