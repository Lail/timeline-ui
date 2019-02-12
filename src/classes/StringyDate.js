class StringyDate extends Date{
  getInt() {
    return this.getTime();
  }

  getString() {
    return this.toISOString().split('T')[0];
  }

  setDaysAfter(num) {
    const asMils = num * 24 * 60 * 60 * 1000;
    return new StringyDate(this.getInt() + asMils);
  }

  setDaysBefore(num) {
    const asMils = num * 24 * 60 * 60 * 1000;
    return new StringyDate(this.getInt() - asMils);
  }

  getDaysUntil(d) {
    d = new StringyDate(d);
    const getDaysUntil = Math.round((d.getInt() - this.getInt()) / 1000 / 60 / 60 / 24);
    return getDaysUntil;
  }

  valueOf(props) {
    return this.getString(props);
  }
}

export default StringyDate;
